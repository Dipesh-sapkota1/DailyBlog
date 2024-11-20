const currentDate = new Date();
const monthIndex = currentDate.getMonth();
const date = currentDate.getDate();
const year = currentDate.getFullYear();
const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];
const monthName = monthNames[monthIndex];
const formattedDate = `${monthName} ${date}, ${year}`;


export default formattedDate;

