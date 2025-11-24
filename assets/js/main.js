one page website

<!--
  PhilCyber - Single File Dark Website
  Save this as philcyber.html and open in a browser.
  Includes responsive layout, search, categories, sidebar, sample posts, and simple client-side "download" buttons.
-->
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>PhilCyber — Tech Reviews, Tools & Tutorials</title>
  <meta name="description" content="PhilCyber — Reviews, downloads (legal/open-source), tutorials, and tech news.">
  <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚙️</text></svg>">
  <style>
    :root{
      --bg:#0b0f12; --panel:#0f1418; --muted:#9aa4ad; --accent:#2ea3ff; --card:#0d1114; --glass:rgba(255,255,255,0.03);
      --radius:12px; --container:1100px; --max-content-width:900px; --mono:ui-monospace, SFMono-Regular, Menlo, monospace;
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0; font-family:Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif; background:linear-gradient(180deg,var(--bg),#050608 150%); color:#e6eef6; -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;
    }

    .wrap{max-width:var(--container); margin:28px auto; padding:18px}

    header.site{
      display:flex; gap:18px; align-items:center; justify-content:space-between; background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); padding:18px; border-radius:14px; box-shadow: 0 6px 20px rgba(2,6,10,0.6);
    }
    .brand{display:flex; gap:12px; align-items:center}
    .logo{width:56px; height:56px; display:inline-grid; place-items:center; border-radius:10px; background:linear-gradient(135deg,var(--accent),#6EE7B7); color:#031018; font-weight:700}
    .brand h1{margin:0;font-size:1.25rem;letter-spacing:0.2px}
    .brand p{margin:0;color:var(--muted); font-size:0.85rem}

    nav.top{display:flex; gap:10px; align-items:center}
    nav.top a{color:var(--muted); text-decoration:none; padding:8px 12px; border-radius:8px; font-weight:600}
    nav.top a:hover{background:var(--glass); color:var(--accent)}

    .searchbar{display:flex; gap:8px; align-items:center; background:transparent; padding:6px; border-radius:10px}
    .searchbar input{background:#071018; border:1px solid rgba(255,255,255,0.03); padding:10px 12px; border-radius:8px; color:inherit; min-width:220px}
    .searchbar button{background:var(--accent); border:none; color:#02111a; padding:10px 12px; border-radius:8px; cursor:pointer; font-weight:700}

    .layout{display:grid; grid-template-columns: 1fr 320px; gap:20px; margin-top:22px}

    .hero{background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent); padding:28px; border-radius:14px; display:flex; gap:20px; align-items:center}
    .hero .left{max-width:var(--max-content-width)}
    .hero h2{margin:0 0 6px 0; font-size:1.6rem}
    .hero p{margin:0;color:var(--muted)}
    .hero .ctas{margin-top:14px; display:flex; gap:10px}
    .btn{background:var(--accent); color:#02111a; padding:10px 14px; border-radius:10px; text-decoration:none; font-weight:700}
    .btn.ghost{background:transparent; border:1px solid rgba(255,255,255,0.04); color:var(--muted)}

    .categories{display:flex; gap:8px; flex-wrap:wrap; margin-top:12px}
    .chip{padding:8px 10px; border-radius:999px; background:rgba(255,255,255,0.02); color:var(--muted); font-weight:600; cursor:pointer}
    .chip.active{background:linear-gradient(90deg,var(--accent),#6EE7B7); color:#02111a}

    .posts{display:grid; grid-template-columns:repeat(auto-fill,minmax(260px,1fr)); gap:18px}
    .card{background:linear-gradient(180deg, rgba(255,255,255,0.015), transparent); border-radius:12px; overflow:hidden; padding:14px; display:flex; flex-direction:column; gap:10px}
    .card img{width:100%; height:140px; object-fit:cover; border-radius:8px}
    .meta{display:flex; justify-content:space-between; align-items:center; color:var(--muted); font-size:0.85rem}
    .title{font-size:1.05rem; margin:6px 0}
    .excerpt{color:var(--muted); font-size:0.94rem; line-height:1.35}
    .card .actions{margin-top:auto; display:flex; gap:8px}
    .download{background:#0a161b; border:1px solid rgba(255,255,255,0.03); padding:8px 10px; border-radius:8px; color:var(--muted); text-decoration:none; font-weight:700}
    .download.primary{background:var(--accent); color:#02111a}

    aside.sidebar{position:relative}
    .panel{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); padding:16px; border-radius:12px}
    .sidebar h4{margin:0 0 10px 0}
    .recent{display:flex; flex-direction:column; gap:10px}
    .recent a{display:flex; gap:10px; text-decoration:none; color:inherit; align-items:center}
    .recent img{width:56px; height:40px; object-fit:cover; border-radius:6px}
    .tag-cloud{display:flex; gap:8px; flex-wrap:wrap}
    .small{font-size:0.9rem; color:var(--muted)}

    footer{margin-top:22px; text-align:center; color:var(--muted); font-size:0.9rem}

    /* responsive */
    @media (max-width:980px){.layout{grid-template-columns:1fr} .searchbar input{min-width:140px}}
    @media (max-width:640px){.brand h1{font-size:1rem} .logo{width:44px;height:44px}}

    /* small utility */
    .kbd{background:#071018;padding:6px 8px;border-radius:6px;font-family:var(--mono);font-size:0.88rem;color:var(--muted)}
  </style>
</head>
<body>
  <div class="wrap">
    <header class="site" role="banner">
      <div class="brand">
        <div class="logo" aria-hidden>PC</div>
        <div>
          <h1>PhilCyber</h1>
          <p>Tech reviews • Tools • Tutorials</p>
        </div>
      </div>

      <nav class="top" role="navigation" aria-label="Main">
        <a href="#home">Home</a>
        <a href="#reviews">Reviews</a>
        <a href="#tutorials">Tutorials</a>
        <a href="#tools">Tools</a>
        <a href="#news">News</a>
      </nav>

      <div class="searchbar" role="search" aria-label="Search PhilCyber">
        <input id="q" placeholder="Search articles, tools, tutorials..." aria-label="Search" />
        <button id="searchBtn">Search</button>
      </div>
    </header>

    <main>
      <section class="hero">
        <div class="left">
          <h2>PhilCyber — Your legal source for tech reviews, open-source tools, and guides</h2>
          <p class="small">I publish safe software recommendations, original tools, tutorials, and commentary. Everything here is legal and carefully curated.</p>

          <div class="ctas">
            <a class="btn" href="#posts">Explore Latest</a>
            <a class="btn ghost" href="#about">About Phil</a>
          </div>

          <div class="categories" id="categoryChips">
            <!-- populated by JS -->
          </div>
        </div>
        <div style="margin-left:auto; text-align:right">
          <p class="small">Tip: Press <span class="kbd">/</span> to focus search</p>
        </div>
      </section>

      <div class="layout">
        <section id="posts" aria-label="Articles and downloads">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px">
            <h3 style="margin:0">Latest Posts</h3>
            <div class="small">Showing <span id="count">0</span> results</div>
          </div>

          <div class="posts" id="postsGrid">
            <!-- cards injected by JS -->
          </div>
        </section>

        <aside class="sidebar" aria-label="Sidebar">
          <div class="panel">
            <h4>Subscribe</h4>
            <p class="small">Get updates on new reviews and tutorials.</p>
            <form id="subscribeForm" onsubmit="event.preventDefault(); alert('Subscribed! (demo)')">
              <input type="email" placeholder="you@example.com" required style="width:100%; padding:10px; border-radius:8px; border:1px solid rgba(255,255,255,0.03); margin-top:8px">
              <button class="btn" style="width:100%; margin-top:10px">Subscribe</button>
            </form>
          </div>

          <div style="height:14px"></div>

          <div class="panel">
            <h4>Recent</h4>
            <div class="recent" id="recentList">
              <!-- populated by JS -->
            </div>
          </div>

          <div style="height:14px"></div>

          <div class="panel">
            <h4>Tags</h4>
            <div class="tag-cloud" id="tagCloud"></div>
          </div>
        </aside>
      </div>

      <footer>
        <p>© <span id="year"></span> PhilCyber — Built responsibly. Links point to official sites or open-source repositories.</p>
      </footer>
    </main>
  </div>

  <script>
    // Sample content data (replace with real content or fetch from an API)
    const POSTS = [
      {id:1,title:'Top 10 Open-Source Alternatives to Popular Apps',category:'Open Source',excerpt:'A curated list of open-source replacements for common paid tools, with pros/cons and installation tips.',img:'https://picsum.photos/600/400?random=12',date:'2025-10-02',tags:['open-source','tools']},
      {id:2,title:'How to Secure Your Windows 11 Install (Step-by-step)',category:'Tutorials',excerpt:'A beginner-friendly guide to privacy and security settings, recommended apps, and backup strategies.',img:'https://picsum.photos/600/400?random=15',date:'2025-09-20',tags:['security','windows']},
      {id:3,title:'Lightweight Text Editor — My Small Tool (Download)',category:'Tools',excerpt:'I built a tiny cross-platform text editor. Here’s what it does and how to get it.',img:'https://picsum.photos/600/400?random=4',date:'2025-08-11',tags:['tools','download']},
      {id:4,title:'AI-Powered Coding Helpers: Are They Ready?',category:'AI',excerpt:'I tested several AI coding assistants and summarise strengths, weaknesses, and best use-cases.',img:'https://picsum.photos/600/400?random=9',date:'2025-11-01',tags:['AI','reviews']},
      {id:5,title:'Best Free Productivity Apps in 2025',category:'Software',excerpt:'A hands-on review and comparison of free productivity apps that won’t cost you a thing.',img:'https://picsum.photos/600/400?random=8',date:'2025-07-30',tags:['reviews','software']}
    ];

    const CATEGORIES = ['All','Software','Tools','Tutorials','Reviews','AI','Open Source','News','Personal Projects'];

    const postsGrid = document.getElementById('postsGrid');
    const recentList = document.getElementById('recentList');
    const tagCloud = document.getElementById('tagCloud');
    const categoryChips = document.getElementById('categoryChips');
    const countEl = document.getElementById('count');

    // render categories
    function renderCategories(){
      CATEGORIES.forEach((c,i)=>{
        const btn = document.createElement('button');
        btn.className = 'chip' + (i===0? ' active':'');
        btn.textContent = c;
        btn.onclick = ()=>{ document.querySelectorAll('.chip').forEach(x=>x.classList.remove('active')); btn.classList.add('active'); filterPosts(); };
        categoryChips.appendChild(btn);
      })
    }

    // render posts
    function renderPosts(list){
      postsGrid.innerHTML = '';
      list.forEach(p=>{
        const card = document.createElement('article'); card.className = 'card';
        card.innerHTML = `
          <img src="${p.img}" alt="${p.title}">
          <div class="meta"><span>${p.category}</span><span>${p.date}</span></div>
          <h4 class="title">${p.title}</h4>
          <p class="excerpt">${p.excerpt}</p>
          <div class="actions">
            <a class="download primary" href="#" onclick="openPost(${p.id})">Read</a>
            <a class="download" href="#" onclick="fakeDownload(${p.id})">Download</a>
          </div>
        `;
        postsGrid.appendChild(card);
      });
      countEl.textContent = list.length;
    }

    function renderRecent(){
      recentList.innerHTML = '';
      POSTS.slice(0,3).forEach(p=>{
        const a = document.createElement('a');
        a.href='#'; a.onclick = (e)=>{ e.preventDefault(); openPost(p.id) };
        a.innerHTML = `<img src="${p.img}" alt="${p.title}"><div><strong style='display:block'>${p.title}</strong><span class='small'>${p.date}</span></div>`;
        recentList.appendChild(a);
      })
    }

    function renderTags(){
      const tags = new Set(); POSTS.forEach(p=> p.tags.forEach(t=>tags.add(t)));
      tagCloud.innerHTML = '';
      Array.from(tags).forEach(t=>{
        const b = document.createElement('button'); b.className='chip'; b.textContent = t; b.onclick = ()=>{ document.getElementById('q').value = t; filterPosts(); };
        tagCloud.appendChild(b);
      })
    }

    function filterPosts(){
      const q = document.getElementById('q').value.trim().toLowerCase();
      const active = Array.from(document.querySelectorAll('.chip')).find(x=>x.classList.contains('active')).textContent;
      const filtered = POSTS.filter(p=>{
        if(active !== 'All' && p.category.toLowerCase() !== active.toLowerCase()) return false;
        if(!q) return true;
        return p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q) || p.tags.join(' ').toLowerCase().includes(q);
      });
      renderPosts(filtered);
    }

    function openPost(id){
      const p = POSTS.find(x=>x.id===id);
      if(!p) return;
      // Basic modal-like detail using alert for demo. Replace with a full article page.
      const msg = p.title + "\n\n" + p.excerpt + "\n\nTags: " + p.tags.join(', ');
      alert(msg);
    }

    function fakeDownload(id){
      const p = POSTS.find(x=>x.id===id);
      if(!p) return;
      // For legal downloads, link to a release page or official site. This demo just shows an alert.
      alert('This would start a legal download or forward to the official project page for "' + p.title + '".');
    }

    // keyboard focus for search
    document.addEventListener('keydown', e=>{ if(e.key === '/') { e.preventDefault(); document.getElementById('q').focus(); } });
    document.getElementById('searchBtn').addEventListener('click', filterPosts);
    document.getElementById('q').addEventListener('input', ()=>{ filterPosts(); });

    // set year
    document.getElementById('year').textContent = new Date().getFullYear();

    // initial render
    renderCategories(); renderPosts(POSTS); renderRecent(); renderTags();
  </script>
</body>
</html>
