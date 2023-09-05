/* eslint-disable react/prop-types */
function Foods({ name }) {
  return (
    <div className="foods flex gap-2 p-1">
      <img src="./asset/foods.svg" alt="Foods" className="w-6 h-6" loading="lazy" />
      <p className="inline">{name}</p>
    </div>
  );
}

export default Foods;
