import { getMessages, sendMessage } from "@/services/messages";
import { Timestamp } from "firebase/firestore";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export type Message = {
  name: string;
  content: string;
  createdAt: Timestamp | null;
};

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState<{
    name: string;
    content: string;
  }>({
    name: "",
    content: "",
  });

  useEffect(() => {
    getMessages().then((messages) => {
      if (messages) {
        setMessages(messages as Message[]);
      } else {
        setMessages([]);
      }
    });
  }, []);

  const handleSendMessage = () => {
    if (newMessage.name && newMessage.content) {
      const messageWithTimestamp = {
        ...newMessage,
        createdAt: Timestamp.now(),
      };
      setMessages([messageWithTimestamp, ...messages]);
      sendMessage(messageWithTimestamp).then((resp) => {
        if (resp.data) {
          toast.success("You have successfully sent your message");
          setNewMessage({
            name: "",
            content: "",
          });
        } else if (resp.error) {
          toast.error("Something went wrong. Please try again.");
        }
      });
    } else {
      toast.error("Please fill your name and message.");
    }
  };

  return (
    <>
      <Toaster />
      <section className="py-24">
        <h3 className="text-gold font-birthstone text-4xl leading-[3rem] text-center">
          Leave a Message for the Bride and Groom
        </h3>

        <div className="flex flex-col gap-5 pt-8 pb-24 mx-5">
          <input
            placeholder="NAME"
            className="bg-gold/[.1] text-gold text-sm rounded-lg focus:ring-gold/70 focus:border-gold/70 block w-full p-2.5"
            value={newMessage.name}
            onChange={(e) =>
              setNewMessage({ ...newMessage, name: e.target.value })
            }
          />
          <textarea
            placeholder="MESSAGE"
            className="resize-none bg-gold/[.1] text-gold text-sm rounded-lg focus:ring-gold/70 focus:border-gold/70 block w-full h-24 p-2.5"
            value={newMessage.content}
            onChange={(e) =>
              setNewMessage({ ...newMessage, content: e.target.value })
            }
          />
          <button
            onClick={handleSendMessage}
            className="border border-gold rounded text-gold py-2 hover:bg-gold hover:text-white"
          >
            SEND
          </button>
        </div>

        {messages.length > 0 ? (
          <div className="max-h-96 overflow-auto border-y-[1.5px] border-black/20">
            {messages.map((message, idx) => (
              <div
                key={`message__${idx}`}
                className={`border-b-[1.5px] ${
                  idx + 1 === messages.length && "border-b-0"
                } border-black/20 py-5 px-8`}
              >
                <div className="flex items-end gap-4">
                  <p className="">{message.name?.toUpperCase() ?? "NO NAME"}</p>
                  <p className="text-sm">
                    {message.createdAt?.toDate()?.toDateString() ?? "NO DATE"}
                  </p>
                </div>
                <p className="pt-2">{message.content}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="border-y-[1.5px] border-black/20 py-3">
            <p className="text-center text-xs">
              THERE IS CURRENTLY NO MESSAGES.
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default Messages;
