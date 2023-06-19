$(document).ready(function(){
    
    $('form').on('submit', function(e){
        e.preventDefault();
        const AdressNewTask = $('#new-task').val();
        const newItem = $('<li style="display: none"></li>');
        $(`
            <div class="task-name">
                <li>${AdressNewTask} </li>
            </div>
        `).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn();
        $('#new-task').val('')
        $("li").click(function(){
            $("li").css("text-decoration","line-through");
        })
    })
})