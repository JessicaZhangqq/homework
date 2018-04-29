function revert(st){
    let ts='';
    for(i=st.length-1;i>=0;i--){
        ts+=st[i];
    }
    console.log(ts);
}
revert('hello');
revert('How are you, my friend.')
revert('word');
revert('Jessica');
revert('Nicolas');