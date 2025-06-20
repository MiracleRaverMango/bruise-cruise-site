document.addEventListener("DOMContentLoaded", () => {
  const posts = [
    {
      id: 1,
      title: "Late Nights & Rehearsal Fights",
      date: "June 12, 2025",
      content: "We nearly broke a mic stand—and maybe a friendship—last night. Turns out writing new set transitions at 2 AM isn’t the best idea..."
    },
    {
      id: 2,
      title: "New Track Sneak Peek",
      date: "June 9, 2025",
      content: "We've been working on something a little different—more synth, more distortion, and a bassline that won’t quit..."
    },
    {
      id: 3,
      title: "That One Time We Got Locked Out",
      date: "June 1, 2025",
      content: "We showed up early for soundcheck and left the gear van running—only to realize we locked the keys inside..."
    }
  ];

  const container = document.getElementById('blog-posts');
  const template = document.getElementById('blog-template');

  posts.forEach(post => {
    const clone = template.content.cloneNode(true);
    clone.querySelector('.blog-post').dataset.id = post.id;
    clone.querySelector('.post-title').textContent = post.title;
    clone.querySelector('.post-date').textContent = post.date;
    clone.querySelector('.post-content').textContent = post.content;

    const form = clone.querySelector('.comment-form');
    const list = clone.querySelector('.comment-list');

    form.addEventListener('submit', e => {
      e.preventDefault();
      const nameInput = form.querySelector('.comment-name');
      const commentInput = form.querySelector('.comment-text');
      const name = nameInput.value.trim();
      const comment = commentInput.value.trim();

      if (name && comment) {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${name}</strong>: ${comment}`;
        list.appendChild(li);
        nameInput.value = '';
        commentInput.value = '';
      }
    });

    container.appendChild(clone);
  });
  // Comment persistence logic
const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');

// Load saved comments
function loadComments() {
  const stored = JSON.parse(localStorage.getItem('bruiseBlogComments')) || [];
  stored.forEach(({ name, text }) => addComment(name, text));
}

// Save comment to localStorage
function saveComment(name, text) {
  const current = JSON.parse(localStorage.getItem('bruiseBlogComments')) || [];
  current.push({ name, text });
  localStorage.setItem('bruiseBlogComments', JSON.stringify(current));
}

// Add comment to DOM
function addComment(name, text) {
  const div = document.createElement('div');
  div.className = 'comment';
  div.innerHTML = `<strong>${name}:</strong> ${text}`;
  commentList.appendChild(div);
}

// Handle comment form submission
commentForm.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('comment-name').value.trim();
  const text = document.getElementById('comment-text').value.trim();
  if (name && text) {
    addComment(name, text);
    saveComment(name, text);
    commentForm.reset();
  }
});

document.addEventListener('DOMContentLoaded', loadComments);

});
