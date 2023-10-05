let blogPosts = [
    {title: "Post 1", author: "Max Knaefler", date: "10/13/2000", content: "Lorem"},
    {title: "Post 2", author: "John Doe", date: "01/20/2001", content: "Ipsum"},
    {title: "Post 3", author: "Jane Doe", date: "03/04/2001", content:"Foo"},
    {title: "Post 4 (in progress)", author: "Todd Newberry", date: "", content:"Bar"}

]

for (let key of blogPosts){
    if (key.date === ''){
        console.log(`${key.title} does not currently have an date tag`)
    }
}