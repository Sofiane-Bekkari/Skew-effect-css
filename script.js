document.addEventListener('DOMContentLoaded', function(){
    let wrapper = document.getElementById('wrapper');
    let toplayer = wrapper.querySelector('.top');
    let handel = wrapper.querySelector('.handel');
    let skew = 0;
    let dalta = 0;


    if(wrapper.className.indexOf('skewed') !== -1){
        skew = 1000;
    }

    wrapper.addEventListener('mousemove', function(e){
        delta = (e.clientX - window.innerWidth / 2) * 0.5;

        handel.style.left = e.clientX + delta +'px';

        toplayer.style.width = e.clientX + skew + delta + 'px';
    });
});