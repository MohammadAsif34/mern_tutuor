const student = [
  {
    roll_no: 1,
    name: "Aarav Sharma",
    semester: 1,
    total_marks: 475,
    sgpa: 8.1,
    cgpa: 8.1,
  },
  {
    roll_no: 2,
    name: "Ishita Verma",
    semester: 1,
    total_marks: 480,
    sgpa: 8.3,
    cgpa: 8.3,
  },
  {
    roll_no: 3,
    name: "Vivaan Gupta",
    semester: 1,
    total_marks: 490,
    sgpa: 8.6,
    cgpa: 8.6,
  },
  {
    roll_no: 4,
    name: "Ananya Singh",
    semester: 1,
    total_marks: 465,
    sgpa: 7.9,
    cgpa: 7.9,
  },
  {
    roll_no: 5,
    name: "Aryan Joshi",
    semester: 1,
    total_marks: 470,
    sgpa: 8.0,
    cgpa: 8.0,
  },
  {
    roll_no: 6,
    name: "Diya Kapoor",
    semester: 1,
    total_marks: 485,
    sgpa: 8.2,
    cgpa: 8.2,
  },
  {
    roll_no: 7,
    name: "Rohan Mehta",
    semester: 1,
    total_marks: 460,
    sgpa: 7.7,
    cgpa: 7.7,
  },
  {
    roll_no: 8,
    name: "Kavya Patil",
    semester: 1,
    total_marks: 495,
    sgpa: 8.5,
    cgpa: 8.5,
  },
  {
    roll_no: 9,
    name: "Aditya Desai",
    semester: 2,
    total_marks: 510,
    sgpa: 8.9,
    cgpa: 8.7,
  },
  {
    roll_no: 10,
    name: "Sneha Rao",
    semester: 2,
    total_marks: 470,
    sgpa: 8.1,
    cgpa: 8.2,
  },
  {
    roll_no: 11,
    name: "Arjun Das",
    semester: 2,
    total_marks: 530,
    sgpa: 9.1,
    cgpa: 8.8,
  },
  {
    roll_no: 12,
    name: "Tanya Malhotra",
    semester: 2,
    total_marks: 480,
    sgpa: 8.3,
    cgpa: 8.4,
  },
  {
    roll_no: 13,
    name: "Vivek Kulkarni",
    semester: 2,
    total_marks: 475,
    sgpa: 8.0,
    cgpa: 8.1,
  },
  {
    roll_no: 14,
    name: "Priya Iyer",
    semester: 2,
    total_marks: 490,
    sgpa: 8.4,
    cgpa: 8.3,
  },
  {
    roll_no: 15,
    name: "Mohit Jain",
    semester: 2,
    total_marks: 500,
    sgpa: 8.6,
    cgpa: 8.5,
  },
  {
    roll_no: 16,
    name: "Riya Gupta",
    semester: 3,
    total_marks: 515,
    sgpa: 8.9,
    cgpa: 8.7,
  },
  {
    roll_no: 17,
    name: "Anshul Reddy",
    semester: 3,
    total_marks: 480,
    sgpa: 8.3,
    cgpa: 8.5,
  },
  {
    roll_no: 18,
    name: "Meera Kumar",
    semester: 3,
    total_marks: 495,
    sgpa: 8.6,
    cgpa: 8.6,
  },
  {
    roll_no: 19,
    name: "Nikhil Roy",
    semester: 3,
    total_marks: 490,
    sgpa: 8.4,
    cgpa: 8.5,
  },
  {
    roll_no: 20,
    name: "Isha Chawla",
    semester: 3,
    total_marks: 505,
    sgpa: 8.8,
    cgpa: 8.6,
  },
  {
    roll_no: 21,
    name: "Arun Tiwari",
    semester: 3,
    total_marks: 500,
    sgpa: 8.7,
    cgpa: 8.6,
  },
  {
    roll_no: 22,
    name: "Sneha Desai",
    semester: 4,
    total_marks: 525,
    sgpa: 9.2,
    cgpa: 8.9,
  },
  {
    roll_no: 23,
    name: "Kunal Sharma",
    semester: 4,
    total_marks: 510,
    sgpa: 8.8,
    cgpa: 8.7,
  },
  {
    roll_no: 24,
    name: "Ishaan Kapoor",
    semester: 4,
    total_marks: 520,
    sgpa: 9.0,
    cgpa: 8.9,
  },
  {
    roll_no: 25,
    name: "Ritika Sinha",
    semester: 4,
    total_marks: 505,
    sgpa: 8.7,
    cgpa: 8.7,
  },
  {
    roll_no: 26,
    name: "Anuj Mehta",
    semester: 4,
    total_marks: 495,
    sgpa: 8.4,
    cgpa: 8.5,
  },
  {
    roll_no: 27,
    name: "Pooja Gupta",
    semester: 4,
    total_marks: 515,
    sgpa: 8.9,
    cgpa: 8.8,
  },
  {
    roll_no: 28,
    name: "Siddharth Rao",
    semester: 5,
    total_marks: 530,
    sgpa: 9.2,
    cgpa: 9.0,
  },
  {
    roll_no: 29,
    name: "Rhea Nair",
    semester: 5,
    total_marks: 540,
    sgpa: 9.4,
    cgpa: 9.2,
  },
  {
    roll_no: 30,
    name: "Abhay Das",
    semester: 5,
    total_marks: 510,
    sgpa: 8.9,
    cgpa: 8.8,
  },
];

let array_length = 0,
  table_size = 10,
  start_idx = 1,
  end_idx = 10,
  curr_idx = 1,
  max_idx = 3;
let array = student;

function preloadCalculation() {
  array_length = array.length;
  max_idx = array_length / table_size;

  if (array_length % table_size > 0) {
    max_idx++;
  }
}

function displayIndexButton() {
  preloadCalculation();
  $(".index_button button").remove();
  $(".index_button").append("<button>previous</button>").addClass("previous");
  for (let i = 1; i <= max_idx; i++) {
    $(".index_button").append("<button index=" + i + ">" + i + "</button>");
  }
  $(".index_button").append("<button>...</button>");
  $(".index_button").append("<button>next</button>").addClass("next");
  $(".next").click(function () {
    if (curr_idx != max_idx) {
      curr_idx++;
      start_idx = start_idx + table_size;
      end_idx = end_idx + table_size;
    }
  });
  highlightIndexButton();
}

function highlightIndexButton() {
  start_idx = (curr_idx - 1) * table_size + 1;
  end_idx = start_idx + table_size + 1;
  if (end_idx > array_length) {
    end_idx = array_length;
  }
  //   $("footer spapn").remove();
  $(".footer span").text(
    "showing" +
      start_idx +
      " to " +
      end_idx +
      " of " +
      array_length +
      " entries"
  );
  $(".index_button button").removeClass("active");
  $(".index_button button[index='" + curr_idx + "']").addClass("active");

  displayTableRows();
}

function displayTableRows() {
  $(".table table tbody tr").remove();
  let tab_start = start_idx - 1;
  let tab_end = end_idx;
  for (let i = 1; i <= table_size; i++) {
    let student = array[i];
    let tr =
      "<tr>" +
      "<td>" +
      student["roll_no"] +
      "</td>" +
      "<td>" +
      student["name"] +
      "</td>" +
      "<td>" +
      student["semester"] +
      "</td>" +
      "<td>" +
      student["total_marks"] +
      "</td>" +
      "<td>" +
      student["sgpa"] +
      "</td>" +
      "<td>" +
      student["cgpa"] +
      "</td>";
    $(".table table tbody").append(tr);
  }
}

displayIndexButton();

function next() {
  if (curr_idx != max_idx) {
    curr_idx++;
    start_idx = start_idx + table_size;
    end_idx = end_idx + table_size;
  }
}
function previous() {
  if (curr_idx != 1) {
    curr_idx--;
    start_idx = start_idx - table_size;
    end_idx = end_idx - table_size;
  }
}
