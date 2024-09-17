export const useTimeStampFormat = (timestamp) => {
  const date = new Date(timestamp);
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  const formattedDate = date.toLocaleDateString("en-US");
  const formattedTime = date.toLocaleTimeString("en-US", options);

  return `${formattedTime} | ${formattedDate}`;
};

export default useTimeStampFormat;
