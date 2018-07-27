const Alice = require('yandex-dialogs-sdk');
const alice = new Alice();

const { loggingMiddleware, button } = Alice;
alice.use(loggingMiddleware({
    level: 1 // Optional. DEFAULT 0. see https://github.com/pimterry/loglevel
}));

alice.welcome(async (ctx) => ctx.reply('Привет! Смотри, что я могу'));
alice.command('дай совет', async (ctx) => ctx.reply('Make const not var'));
alice.command(['билет в кино', 'что посмотреть', 'что показывают'], ctx => {
    ctx.reply({
        text: 'Есть «2001 a space odyssey»',
        buttons: [button('Забронировать')]
    })
});

alice.command(/(https?:\/\/[^\s]+)/g, ctx => ctx.reply('Matched a link!'));
alice.any(async (ctx) => ctx.reply('О чём это вы?'));
alice.listen('/', 3000);