import WordsCard from "./SharedComponets/WordsCard";

const Services2 = () => {
  return (
    <div className="relative space-y-4 w-full sm:flex md:space-x-6 items-center p-11 my-14 px-4 sm:px-6 md:px-16 lg:px-20">
      <WordsCard
        word="Progress"
        title="Very fast system rogress"
        descr="We always show the best possible and fast for you so you don't have to worry about our working system. So don't hesitate to use our service"
      />

      <div data-aos="zoom-in">
        <img
          src="/img/m4.svg"
          alt=""
          className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px]"
        />
      </div>
    </div>
  );
};

export default Services2;
