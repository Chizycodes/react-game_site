//Base URL
const base_url = "https://api.rawg.io/api/";

//Getting the date
//Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

//Day
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

//Upcoming Games
const upcoming_games = `games?key=${process.env.REACT_APP_GAMES_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

//New Games
const newGames = `games?key=${process.env.REACT_APP_GAMES_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;
