function insert(num)
{
    $('.calc-display').val($('.calc-display').val() + num);
}
function equal()
{
    var val = eval($('.calc-display').val()).toString();
    var dot = val.indexOf('.');
    $('.calc-display').val(parseFloat(val.substring(0, dot + 3)));
}
function c()
{
    $('.calc-display').val('');
}
function del()
{
    var val = $('.calc-display').val();
    $('.calc-display').val(val.substr(0, val.length - 1));
}