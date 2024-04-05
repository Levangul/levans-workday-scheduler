
$(function () {

  function updateTime() {
    let todayDate = dayjs()
    $("#currentDay").text(todayDate.format("dddd MMMM D - h:mm:ss"));
    
    let currentHour = dayjs().format('H')

    $('.time-block').each(function () {

      //* converting string into integar

      let timeBlock = parseInt(this.id);

      //* adding classes depending on hour to switch colors

      if (timeBlock == currentHour) {
        $(this).addClass('present');
      } else if (timeBlock < currentHour) {
        $(this).addClass('past');
      } else {
        $(this).addClass('future');
      }
    })
  }
  function saveText() {

    //* function to set value into local storage after click

    $('.saveBtn').on('click', function () {
      let key = $(this).parent().attr('id');
      let value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
    
  }
  $('.time-block').each(function () {

    //* function to get value from local storage

    key = $(this).attr('id');
    value = localStorage.getItem(key);
    $(this).children('.description').val(value);
  });

  updateTime()
  setInterval(updateTime, 1000)
  saveText()
});

