import ReactCountdown from "react-countdown";

const Countdown = ({ dateString }: { dateString: string }) => {
  const renderer = ({
    days,
    hours,
    minutes,
  }: {
    days: number;
    hours: number;
    minutes: number;
  }) => {
    return (
      <div className="flex gap-3 border-y-[1.5px] py-2 px-5">
        <h3 className="flex items-end font-abhaya text-4xl">
          {String(days).length === 1 ? `0${days}` : days}{" "}
          <p className="text-sm">days</p>
        </h3>
        <h3 className="flex items-end font-abhaya text-4xl">
          {String(hours).length === 1 ? `0${hours}` : hours}{" "}
          <p className="text-sm">hours</p>
        </h3>
        <h3 className="flex items-end font-abhaya text-4xl">
          {String(minutes).length === 1 ? `0${minutes}` : minutes}{" "}
          <p className="text-sm">mins</p>
        </h3>
      </div>
    );
  };
  return (
    <section className="pt-36 pb-10 flex items-center justify-center">
      <ReactCountdown date={dateString} renderer={renderer} />
    </section>
  );
};

export default Countdown;
