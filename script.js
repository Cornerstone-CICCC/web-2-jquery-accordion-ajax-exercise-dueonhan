$(function () {
  // your code here
  $(".accordion-header").on("click", function () {
    //alert("1");
    //console.log($(this).next().find("p"));
    $(this).next().toggle("slow");
  });

  $(".load-todo").on("click", function () {
    $.ajax({
      url: "https://dummyjson.com/todos",
      type: "GET",
      success: function (response) {
        const todos = response.todos;
        //console.log(todos);
        buildTodoList(todos);
      },
      error: function (err) {
        console.error(err);
      },
    });
  });

  function buildTodoList(arr) {
    const list = $(".todo-list");
    let liHtml = ""; // store list
    //console.log("liHtml", liHtml);
    arr.forEach((el) => {
      liHtml += `<li>${el.todo}</li>`; // concatenate li into variable
    });
    list.html(liHtml);
  }
});
