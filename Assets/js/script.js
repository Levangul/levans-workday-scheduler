
$(function () {

  function updateTime() {
    let todayDate = dayjs()
    $("#currentDay").text(todayDate.format("dddd MMMM Do h:mm:ss"));
    let now = dayjs().hour('H')

    $('.time-block').each(function () {
      let timeBlock = parseInt(this.id);
      if (timeBlock == now) {
        $(this).removeClass('past future').addClass('present');
      } else if (timeBlock < now) {
        $(this).removeClass('future present').addClass('past');
      } else {
        $(this).removeClass('past present').addClass('future');
      }
    })
  }
  function saveText() {
    $('.saveBtn').on('click', function () {
      let key = $(this).parent().attr('id');
      let value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });

  }
  $('.time-block').each(function () {
    key = $(this).attr('id');
    value = localStorage.getItem(key);
    $(this).children('.description').val(value);
  });

  updateTime()
  setInterval(updateTime, 1000)
  saveText()


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
