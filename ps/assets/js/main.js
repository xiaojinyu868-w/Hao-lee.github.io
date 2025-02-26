// 导航栏滚动效果
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.padding = '10px 0';
    navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.padding = '15px 0';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

// 移动端导航菜单
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
  navToggle.addEventListener('click', function() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
}

// 滚动平滑效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // 关闭移动菜单（如果打开）
    if (navToggle && navToggle.classList.contains('active')) {
      navToggle.classList.remove('active');
      navMenu.classList.remove('active');
    }

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});

// 表单提交处理
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 获取表单数据
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // 这里可以添加发送邮件的API调用
    alert(`感谢您的留言，${name}！\n我会尽快回复您的邮件：${email}`);
    
    // 重置表单
    contactForm.reset();
  });
}

// 动态调整活动导航项
function setActiveNavItem() {
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-menu li');
  
  let currentSection = '';
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 100) {
      currentSection = section.getAttribute('id');
    }
  });
  
  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.querySelector('a').getAttribute('href') === `#${currentSection}`) {
      item.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveNavItem); 