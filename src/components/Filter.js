const Filter = () => {
  const handlePersonSearch = (event) => {
    setFilterString(event.target.value);
  };

  return (
    <div>
      filter shown with <input onChange={handlePersonSearch} />
    </div>
  );
};

export default Filter;
