let news = [
    ['2023-09-29', 'Special Announcement', '#'],
    ['2023-03-13', 'Special Announcement', '#'],
    ['2023-02-28', 'Special Announcement', '#'],
    ['2023-01-20', 'Special Announcement', '#'],
    ['2022-12-23', 'Special Announcement', '#'],
    ['2022-12-22', 'Special Announcement', '#'],
    ['2022-11-16', 'Special Announcement', '#'],
    ['2022-11-02', 'Special Announcement', '#'],
    ['2022-11-02', 'Special Announcement', '#'],
    ['2022-11-02', 'Special Announcement', '#'],
    ['2022-10-26', 'Special Announcement', '#'],
    ['2022-10-14', 'Special Announcement', '#'],
    ['2022-09-09', 'Special Announcement', '#'],
    ['2022-08-24', 'Special Announcement', '#'],
    ['2022-04-13', 'Special Announcement', '#'],
    ['2022-03-03', 'Special Announcement', '#'],
    ['2022-02-18', 'Special Announcement', '#'],
    ['2022-02-07', 'Special Announcement', '#'],
    ['2022-02-05', 'Special Announcement', '#'],
    ['2022-01-29', 'Special Announcement', '#'],
    ['2022-01-21', 'Special Announcement', '#'],
    ['2021-12-24', 'Special Announcement', '#'],
    ['2021-12-24', 'Special Announcement', '#'],
    ['2021-11-25', 'Special Announcement', '#'],
    ['2021-11-25', 'Special Announcement', '#'],
    ['2021-10-25', 'Special Announcement', '#'],
    ['2021-10-13', 'Special Announcement', '#'],
    ['2021-10-13', 'Special Announcement', '#']
]

let events = [
    ['2023-09-29', 'Special Event', '#'],
    ['2023-03-13', 'Special Event', '#'],
    ['2023-02-28', 'Special Event', '#'],
    ['2023-01-20', 'Special Event', '#'],
    ['2022-12-23', 'Special Event', '#'],
    ['2022-12-22', 'Special Event', '#'],
    ['2022-11-16', 'Special Event', '#'],
    ['2022-11-02', 'Special Event', '#'],
    ['2022-11-02', 'Special Event', '#'],
    ['2022-11-02', 'Special Event', '#'],
    ['2022-10-26', 'Special Event', '#'],
    ['2022-10-14', 'Special Event', '#'],
    ['2022-09-09', 'Special Event', '#'],
    ['2022-08-24', 'Special Event', '#'],
    ['2022-04-13', 'Special Event', '#'],
    ['2022-03-03', 'Special Event', '#'],
    ['2022-02-18', 'Special Event', '#'],
    ['2022-02-07', 'Special Event', '#'],
    ['2022-02-05', 'Special Event', '#'],
    ['2022-01-29', 'Special Event', '#'],
    ['2022-01-21', 'Special Event', '#'],
    ['2021-12-24', 'Special Event', '#'],
    ['2021-12-24', 'Special Event', '#'],
    ['2021-11-25', 'Special Event', '#'],
    ['2021-11-25', 'Special Event', '#'],
    ['2021-10-25', 'Special Event', '#'],
    ['2021-10-13', 'Special Event', '#'],
    ['2021-10-13', 'Special Event', '#']
]

$(".news-table").html(function (){
    let table = '<tr><th>Date</th><th>Title</th></tr>'
    for(let i=0; i<news.length;i++){
        table+=`<tr><td>${news[i][0]}</td><td><a href="${news[i][2]}">${news[i][1]}</a></td></tr>`
    }
    return table
})

$(".events-table").html(function (){
    let table = '<tr><th>Date</th><th>Title</th></tr>'
    for(let i=0; i<events.length;i++){
        table+=`<tr><td>${events[i][0]}</td><td><a href="${events[i][2]}">${events[i][1]}</a></td></tr>`
    }
    return table
})

$("#index-news").html(function (){
    let content = '<ul>'
    for(let i=0; i<5;i++){
        content+=`<li><a class="fade" href="${news[i][2]}" target="_blank">
        <p class="meta">${news[i][0]}</p><p class="text">${news[i][1]}</p></a></li>`
    }
    content+='</ul>'
    return content
})

$("#index-events").html(function (){
    let content = '<ul>'
    for(let i=0; i<5;i++){
        content+=`<li><a class="fade" href="${events[i][2]}" target="_blank">
        <p class="meta">${events[i][0]}</p><p class="text">${events[i][1]}</p></a></li>`
    }
    content+='</ul>'
    return content
})