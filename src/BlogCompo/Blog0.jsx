const Blog0 = () => {
  const handleClick = () => {
    alert("You are wonderful!");
  };
  return (
    <div>
      <h1 className="text-5xl font-bold pt-24">#0 Quote of the day</h1>
      <p className="pt-10 font-bold">
        Discover what your today's quote is, have fun!
      </p>
      <button
        onClick={handleClick}
        className="border px-2 py-2 mt-4 font-bold text-white rounded bg-blue-500"
      >
        Generate Quotes.
      </button>
    </div>
  );
};

export default Blog0;
