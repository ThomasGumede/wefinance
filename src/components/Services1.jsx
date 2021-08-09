import WordsCard from "./SharedComponets/WordsCard";

const Services1 = () => {
  return (
    <div className="relative space-y-4 w-full sm:flex md:space-x-6 items-center p-11 my-14 px-4 sm:px-6 md:px-16 lg:px-20">
      <div data-aos="zoom-in">
        <img
          src="/img/Revenue-pana.svg"
          alt=""
          className="w-[400px] h-[400px] sm:w-[500px] sm:h-[500px] md:w-[700px]"
        />
      </div>

      <WordsCard
        word='You Get it'
        title="Don't panic your finances"
        descr="keep calm for you business finances because we can solve your financial
        statements easily and safely. So don't hesitate to use our services"
      />
    </div>
  );
};

export default Services1;
