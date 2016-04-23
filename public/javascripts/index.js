(function ($) {

    var BASE_URL = 'http://localhost:3000';

    $(function () {
        console.log('jquery loaded');
        taskLoad();


        $('#task-create').click(function () {
            var $input = $('#task-create-input');
            var param = {
                header: $input.val()
            };
            $.post(BASE_URL + '/task/new', param, function (data) {
                $.growl.notice({
                    title:'',
                    message:'新しいタスクを作成しました'
                });
                $input.val('');
                taskLoad();
            });
        });

        $('body').on('click', '.task-done', function (event) {
            var delId = $(this).attr('id');
            $.post(BASE_URL + "/task/done", {id: delId}, function (data) {
                console.log(data);
                $.growl.notice({
                    title:'',
                    message:'タスクを完了させました'
                });
                taskLoad();
            });
        });

        function taskLoad() {
            $.get(BASE_URL + "/task/all", {}, function (data) {
                console.log(data);
                var $tbody = $('table > tbody');
                $tbody.empty();
                $.each(data, function (idx, val) {
                    var row = '<tr><td>' + this.header + '</td><td>' + this.id + '</td><td><button type="button" class="task-done" id="' + this.id + '">完了</button> </td></tr>';
                    $tbody.append($(row));
                })
            });
        }
    });

})(window.jQuery);