module.exports = {
    format_date: date => {
            return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
              date
            ).getFullYear()}`;    
    },
    get_title: (url) => {
      let title = "The Tech Blog";
      if(url) url.includes("dashboard") ? title = "Your Dashboard" : title = "The Tech Blog";
      return title
    }
  }