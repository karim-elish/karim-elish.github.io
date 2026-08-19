(function(){
  const grid=document.getElementById('artifact-grid'); if(!grid) return;
  const q=document.getElementById('artifact-search'), type=document.getElementById('artifact-type'), area=document.getElementById('artifact-area'), count=document.getElementById('artifact-count');
  const all=window.NEXUS_DATA.artifacts;
  [...new Set(all.map(x=>x.area))].sort().forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v;area.appendChild(o)});
  function render(){
    const needle=q.value.trim().toLowerCase();
    const items=all.filter(x=>(!needle || [x.title,x.authors,x.description,x.area,...x.topics].join(' ').toLowerCase().includes(needle)) && (!type.value || x.type===type.value) && (!area.value || x.area===area.value));
    count.textContent=`${items.length} artifact${items.length===1?'':'s'}`;
    if(!items.length){grid.innerHTML='<div class="empty" style="grid-column:1/-1">No artifacts match the current filters.</div>';return}
    grid.innerHTML=items.map(x=>`<article class="artifact" id="${x.id}"><div class="artifact-top"><div><div class="artifact-type">${x.type} · ${x.year}</div><h2>${x.title}</h2></div><svg class="artifact-icon" aria-hidden="true"><use href="../assets/img/icons.svg#icon-dataset"></use></svg></div><div class="authors">${x.authors}</div><p>${x.description}</p><div class="tags">${x.topics.map(t=>`<span class="tag">${t}</span>`).join('')}</div><div class="card-actions">${x.paper?`<a class="mini-link" href="${x.paper}" target="_blank" rel="noopener">Paper</a>`:''}<a class="mini-link" href="${x.data}" target="_blank" rel="noopener">Artifact record</a><span class="badge-restricted">${x.access}</span></div></article>`).join('');
  }
  [q,type,area].forEach(el=>el.addEventListener(el===q?'input':'change',render));render();
})();