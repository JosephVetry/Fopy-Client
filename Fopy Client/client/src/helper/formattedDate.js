export const formattedDate = () => {
  const dateString = "2023-06-30T03:29:14.952Z";
  const date = new Date(dateString);

  // Extract day, month, and year components
  const day = date.getDate();
  const month = date.getMonth(); // Months are zero-based
  const year = date.getFullYear();

  // Create an array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // Format the desired date string
  const formattedDate = `${day} ${monthNames[month]} ${year}`;

  return formattedDate;
};
