// document.getElementById('show-news').addEventListener('click', () => {
//     require('./index');
// });
document.getElementById('show-news').addEventListener('click', () => {
    require.ensure([], require => require('./index'));
});
