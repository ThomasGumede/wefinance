const WordsCard = ({word, title, descr}) => {
  return (
    <div className="space-y-7 sm:w-[500px]">
      <h5 data-aos='fade-down' data-aos-delay='300' className="text-lg font-bold text-[#009366]">{word}</h5>

      <h2 data-aos='fade-down' data-aos-delay='400' className="text-3xl font-semibold text-[#042352]">
        {title}
      </h2>

      <p data-aos='fade-down' data-aos-delay='500' className="text-sm sm:text-base text-[#5c667b]">
        {descr}
      </p>

      <div data-aos='fade-down' data-aos-delay='600'>
          <a href="#home" className="btn">Learn more</a>
      </div>
    </div>
  );
};

export default WordsCard;
