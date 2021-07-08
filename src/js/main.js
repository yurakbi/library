import $ from './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => $('#trigger').createModal( {
    text: {
        title: 'Modal title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi animi dolores illum necessitatibus dolore voluptas tempora, iste fuga molestiae eaque quos maiores ducimus ex, vero iusto? Enim incidunt culpa cumque?'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success'],
                false,
                () => {
                    alert("Дані збережені");
                }
            ],
            [
                'Another btn',
                ['btn-warning', "ml-10"],
                false,
                () => {
                    alert('3-я кнопка');
                }
            ]
        ]
            
    }
}));

$().get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));

