// 回到首页按钮功能
(function() {
  // 创建回到首页按钮
  const backToHomeBtn = document.createElement('a');
  backToHomeBtn.href = 'index.html';
  backToHomeBtn.className = 'back-to-home';
  backToHomeBtn.innerHTML = '🏠';
  backToHomeBtn.setAttribute('aria-label', '回到首页');
  backToHomeBtn.setAttribute('title', '回到首页');
  
  // 添加样式
  const style = document.createElement('style');
  style.textContent = `
    .back-to-home {
      position: fixed;
      bottom: 30px;
      right: 30px;
      width: 50px;
      height: 50px;
      background: var(--black, #111111);
      color: var(--white, #ffffff);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      text-decoration: none;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      opacity: 0;
      visibility: hidden;
      transform: translateY(20px);
      transition: all 0.3s ease;
      z-index: 1000;
    }
    
    .back-to-home:hover {
      background: var(--red, #C84B31);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    }
    
    .back-to-home.visible {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }
    
    @media (max-width: 768px) {
      .back-to-home {
        bottom: 20px;
        right: 20px;
        width: 45px;
        height: 45px;
        font-size: 20px;
      }
    }
  `;
  
  document.head.appendChild(style);
  document.body.appendChild(backToHomeBtn);
  
  // 监听滚动事件
  let lastScrollTop = 0;
  let scrollTimer = null;
  
  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // 清除之前的定时器
    if (scrollTimer) {
      clearTimeout(scrollTimer);
    }
    
    // 设置新的定时器
    scrollTimer = setTimeout(function() {
      // 当页面滚动超过 300px 时显示按钮
      if (scrollTop > 300) {
        backToHomeBtn.classList.add('visible');
      } else {
        backToHomeBtn.classList.remove('visible');
      }
    }, 100);
    
    lastScrollTop = scrollTop;
  }, { passive: true });
  
  // 初始检查
  setTimeout(function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 300) {
      backToHomeBtn.classList.add('visible');
    }
  }, 500);
})();
