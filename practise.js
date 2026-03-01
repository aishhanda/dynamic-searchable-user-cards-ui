const users = [
  { name: "Amisha Rathore", pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg", bio: "Silent chaos in a loud world. Not for everyone." },
  { name: "Rohan Mehra", pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg", bio: "Coffee in one hand, ambition in the other." },
  { name: "Priya Sharma", pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg", bio: "Dreamer, thinker, and occasional overthinker." },
  { name: "Ayaan Khan", pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg", bio: "Lover of nature and night-time musings." },
  { name: "Neha Gupta", pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?fit=crop&w=400&h=400", bio: "Creating magic with words and pixels." },
  { name: "Kabir Singh", pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg", bio: "Fitness freak with a love for pizza." },
  { name: "Sanya Malhotra", pic: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&w=400&h=400", bio: "Spreading smiles and good vibes everywhere." },
  { name: "Vivaan Joshi", pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?fit=crop&w=400&h=400", bio: "Tech geek and gamer, living in pixels." }
];

function showUsers(arr) {
  const container = document.querySelector('.wrap-cards');
  
  arr.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('card');

    const bgImg = document.createElement('div');
    bgImg.classList.add('bg-img');
    bgImg.style.backgroundImage = `url('${user.pic}')`;

    const blurredLayer = document.createElement('div');
    blurredLayer.classList.add('blurred-layer');
    blurredLayer.style.backgroundImage = `url('${user.pic}')`;

    const content = document.createElement('div');
    content.classList.add('content');

    const h3 = document.createElement('h3');
    h3.textContent = user.name;

    const p = document.createElement('p');
    p.textContent = user.bio;

    content.appendChild(h3);
    content.appendChild(p);

    card.appendChild(bgImg);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    container.appendChild(card);
  });
}

showUsers(users);

const inp = document.querySelector(".search-box");
inp.addEventListener("input", function (){
    let newArray = users.filter((user)=>{
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase());
    })
    document.querySelector(".wrap-cards").innerHTML = "";
    showUsers(newArray);
})