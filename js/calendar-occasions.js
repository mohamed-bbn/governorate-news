  $(window).on("load", function() {


      const events = {
          // يوليو
          "2025-07-04": [{
              title: "عيد الاستقلال",
              url: "occasions-inner.html"
          }, {
              title: "مناسبة أخرى",
              url: "occasions-inner.html"
          }],
          "2025-07-10": [{
              title: "مؤتمر تقني",
              url: "occasions-inner.html"
          }],
          "2025-07-15": [{
              title: "رحلة عائلية",
              url: "occasions-inner.html"
          }],
          "2025-07-20": [{
              title: "حفلة زواج",
              url: "occasions-inner.html"
          }],
          "2025-07-28": [{
              title: "ورشة عمل",
              url: "occasions-inner.html"
          }],

          // أغسطس
          "2025-08-01": [{
              title: "اليوم الرياضي",
              url: "occasions-inner.html"
          }],
          "2025-08-09": [{
              title: "مهرجان صيفي",
              url: "occasions-inner.html"
          }],
          "2025-08-19": [{
              title: "عيد ميلاد",
              url: "occasions-inner.html"
          }],

          // سبتمبر
          "2025-09-05": [{
              title: "مؤتمر أعمال",
              url: "occasions-inner.html"
          }],
          "2025-09-15": [{
              title: "إجازة رسمية",
              url: "occasions-inner.html"
          }],
          "2025-09-30": [{
              title: "معرض فنون",
              url: "occasions-inner.html"
          }]
      };

      let currentMonth = new Date().getMonth();
      let currentYear = new Date().getFullYear();

      function renderCalendar(month, year) {
          const monthYear = document.getElementById("monthYear");
          const calendarBody = document.getElementById("calendar-body");
          calendarBody.innerHTML = "";

          const months = [
              "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
              "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
          ];

          monthYear.textContent = months[month] + " " + year;

          const firstDay = new Date(year, month).getDay();
          const daysInMonth = new Date(year, month + 1, 0).getDate();

          let date = 1;
          for (let i = 0; i < 6; i++) {
              let row = document.createElement("tr");
              for (let j = 0; j < 7; j++) {
                  let cell = document.createElement("td");
                  if (i === 0 && j < firstDay) {
                      cell.innerHTML = "";
                  } else if (date > daysInMonth) {
                      break;
                  } else {
                      let dayDiv = document.createElement("div");
                      dayDiv.classList.add("day-number");
                      dayDiv.innerText = date;
                      cell.appendChild(dayDiv);

                      let fullDate = year + "-" + String(month + 1).padStart(2, '0') + "-" + String(date).padStart(2, '0');
                      if (events[fullDate]) {
                          events[fullDate].forEach(ev => {
                              let link = document.createElement("a");
                              link.classList.add("event");
                              link.innerText = ev.title;
                              link.href = ev.url;
                              cell.appendChild(link);
                          });
                      }

                      date++;
                  }
                  row.appendChild(cell);
              }
              calendarBody.appendChild(row);
          }
      }

      document.getElementById("prev").addEventListener("click", () => {
          currentMonth--;
          if (currentMonth < 0) {
              currentMonth = 11;
              currentYear--;
          }
          renderCalendar(currentMonth, currentYear);
      });

      document.getElementById("next").addEventListener("click", () => {
          currentMonth++;
          if (currentMonth > 11) {
              currentMonth = 0;
              currentYear++;
          }
          renderCalendar(currentMonth, currentYear);
      });

      renderCalendar(currentMonth, currentYear);
  });