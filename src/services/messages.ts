import {
  getDocs,
  collection,
  addDoc,
  query,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";
import { Message } from "@/components/Messages";

export async function getMessages() {
  if (!db) {
    console.log("No database connection");
    return null;
  }

  try {
    const collRef = collection(db, "messages");
    const q = query(collRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => doc.data());

    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

export async function sendMessage(message: Message) {
  if (!db) {
    console.log("No database connection");
    return { data: true, error: null };
  }

  try {
    const collRef = collection(db, "messages");
    await addDoc(collRef, message);

    return { data: true, error: null };
  } catch (err) {
    console.log(err);
    return { data: null, error: true };
  }
}
