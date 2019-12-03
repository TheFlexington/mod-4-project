import React from 'react';

function Character(props) {

  
    let male = 'https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg'
    let female = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX////MzMzJycns7Ozm5ubp6enu7u7x8fH6+vrf39/Nzc3a2trS0tL29vbj4+PQ0NCwLoN0AAAGS0lEQVR4nO2d15akOgxFsUkm///fDqHopm5ThWUU12W/9sPUGclWsGyy7OHh4eHh4eHh4eHh4eGBkzAMg/RvoKNueucX2q6W/i0EDN0sze34Nv/5S11VdRD8ZThU/a+6l0bX5MNQj/1qVd8XpkXW03/1bSL9wazed2Y1hu5U34niRvqnpjFG6lvtWEr/WjjDuYN+1DhZ22UBBtw19pbiJdCAu0Y7y7FI0bdIdEZcNXYLPdM4Sv/4CEKbLnCW2En//kuGO/oWib20ggvuClQvMdzV57Q76oSg0PlCWsZnbuyibxLVxv4KR6BzrbSSTyDp05vdIPnoKlGln9Z4Ap1TGTJaRIHO59f/IDep6fYHFG42qPpmI6qr+nNcEyo0Yo8sUJ0R72fcf1BmxAZfoa+kRb2Brs8pi4loGekRVYlNRyDQOU2FIoUJZyPqOdAgcVJVJQaNk84SpYX9QGNCPf0Mgli4oyPqIxa+f1AR9eGnTBAURP1AKlBD1Kc1oYKoP6D2Lk6QjvrIrYszhbLnbcSLcENUIWEk/EGu67YcSHOY0E1SCocpR+/NnCIW9YNnsaDboz7/nsqyy6ysK1FgNRJ01z4SslqgyiCqes/pJLI3+mB/REIhRyw8KByzWeMik08qVefik0TfZlUzL44844oeKGMXII1VOyucqoyr3GB10k2ib7JyXpBcA//8Cmca7+f1wVRuiChcW6g9k5uyr8ONMCdTTAp54+HOVJQtk8JByIZLvt+wbDUy+jYaDiOiDyZAID+xWXyEuon4nSGjLTWmrq6EVuELTzxIHBxbef9RIrWflr2T1egZdtNhFFPnPbEJQ94c7w+yk5claY1Y5nXJ00X8AHmbf5Q03waxQpl09MjSIabsLcqG+pU+ayh3Gt4G1Dme9FCRuQF1DmnmLbqPvqBtnlKfasdAe96mYBkSTy8oUEgc8zUopE27FSgkTmrkdxrq0QXxeEieeZfCpW9LXvvyHd+fwnGRRtJNeZrdgkbkmh2Sq5+YRvcrplGov3ANR+VeqsvGdTdBro3BdX4vtgzZRmrEbLgcVbCIlDpXW7M1lr1GLB62Yc4ZORTKddt8xxQQOccuj/qYju8XJE5Hfc/50JmAmzI/HsVfInI/HcW9mwq8qMibekvcBkZ9a+dSoMjFJ8a9Ruo+98h8nUSAMDLNm0gJXKgprzi/4Jib+QZ5/1v8UQX6PVVYIO1VfKfjSTNSgRou49P6qYK7+BlpFi6+zbwglCgtbWfYPuPQYNfF0qHwSKiqAb3g0PI0zQGUU7e+6fo5j2h7jZ9rweijavLME7r7k6caAuA36rK4VziqeFHoilt5nHYTbtyojaWfookljFPagjThoy9CVcBjh7YXWS+BWlFLFhoPNMWxsgh/gcYNsXd2kgHWHCY+MPMOsDZWnq+dATy+sbcMoQp1PHIJAyTQSML2Dkyh+POICYAE2ov3GVShvWDxf1AI+8CjQS8FRguDOw0wpzEYLaC9cOnfCwdYAus4hQEBE2hwMwUfu5lLTMF9GmvlU8Lom7HdNOEgytZKTJrnt+SniY+32pGYfPBtpSl84/xJ92dkd26dPin/GPBCSPqq+hHl6RvCBJHuxYhyr03zYsT64HGvtD1co8jbNCoYSvwL6iSmQk/Nsce+lZmx7gk+Ycl/U+YjFPpWjZ2OHae8HeO/aRRPxuuO+GqJbws5Q4aq47hV4n1fSKzIeuz5Xoj0vu1yTlMOBcIYYopKHlvWjdwrwvP/az/S7j3kG0uUyq4k8tgwttLyXsymJCixBnnzHfHYoXJguIkHxU94qWtQqG/Bt0gaFTys+wk/IfjqQJh3InC/khR+Y+8a7+6ZUekKfOPWBSKiyg+ZG7Mqsl+xiCd5MVoRmCzRhotuJDmqhtfX40nozbF+oxIB8By18EusCUAP5sTfCwYDPLRifWQHCdjbmBo+EAAFNK9ibZvZgBjRoglBCarQw4G3iR//a6R/aiLxM0dGTRg/Lm5zn1mI3WvsRfud2NvSZk0Y66YW85mdODe1upMuxO2m8p8hSSeqErZXNx2JuROuvkP6lZhC2G6sWIjJTU2bMKbUtxwrFq7jheKTpiium26WY8XKVVpjtTT85cpNrTvpdc9t/WSybS6CfhVBnkKZRJHAqGNo8wGLfyfGbbWx5EvUAAAAAElFTkSuQmCC'

    return (
        console.log(props),

        <div key={ props.id }>
            <img src={ props.gender === 'male' ? male : null } className='ui image' alt=''/>
            <p>
                {props.name}
                {props.gold}
                {props.strength}
                {props.dexterity}
                {props.intelligence}
                {props.endurance}
                {props.luck}
                
            </p>
        </div>

    );
}

 
export default Character;

// https://cdn1.vectorstock.com/i/thumb-large/46/55/person-gray-photo-placeholder-woman-vector-22964655.jpg  female placeholder image
// https://cdn1.vectorstock.com/i/thumb-large/77/30/default-avatar-profile-icon-grey-photo-placeholder-vector-17317730.jpg male placeholder image