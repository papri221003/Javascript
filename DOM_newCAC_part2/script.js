let parent=document.querySelector('.parent');
console.log(parent);
console.log(parent.children);

for(let i=0;i<parent.children.length;i++)
{
    console.log(parent.children[i].innerText);
    parent.children[i].style.backgroundColor="purple";  
}

console.log("Nodes: ", parent.childNodes);

