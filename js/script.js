/*
    Кнопки в "Сервисы" на главной
*/
if (document.querySelector(".maintenance")) {
  let deliveryButton = document.querySelector(".maintenance-delivery-button")
  let maintenanceDeliveryContent = document.querySelector(".maintenance-delivery")
  let guaranteeButton = document.querySelector(".maintenance-guarantee-button")
  let maintenanceGuaranteeContent = document.querySelector(".maintenance-guarantee")
  let creditButton = document.querySelector(".maintenance-credit-button")
  let maintenanceCreditContent = document.querySelector(".maintenance-credit")
  // Кнопка "Доставка"
  deliveryButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    deliveryButton.classList.add("active");
    guaranteeButton.classList.remove("active");
    creditButton.classList.remove("active");
    maintenanceDeliveryContent.classList.remove("maintenance-hide");
    maintenanceDeliveryContent.classList.add("maintenance-show");
    maintenanceGuaranteeContent.classList.remove("maintenance-show");
    maintenanceGuaranteeContent.classList.add("maintenance-hide");
    maintenanceCreditContent.classList.remove("maintenance-show");
    maintenanceCreditContent.classList.add("maintenance-hide");
  })
  // Кнопка "Гарантия"
  guaranteeButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    deliveryButton.classList.remove("active");
    guaranteeButton.classList.add("active");
    creditButton.classList.remove("active");
    maintenanceDeliveryContent.classList.remove("maintenance-show");
    maintenanceDeliveryContent.classList.add("maintenance-hide");
    maintenanceGuaranteeContent.classList.remove("maintenance-hide");
    maintenanceGuaranteeContent.classList.add("maintenance-show");
    maintenanceCreditContent.classList.remove("maintenance-show");
    maintenanceCreditContent.classList.add("maintenance-hide");
  })
  // Кнопка "Кредит"
  creditButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    deliveryButton.classList.remove("active");
    guaranteeButton.classList.remove("active");
    creditButton.classList.add("active");
    maintenanceDeliveryContent.classList.remove("maintenance-show");
    maintenanceDeliveryContent.classList.add("maintenance-hide");
    maintenanceGuaranteeContent.classList.remove("maintenance-show");
    maintenanceGuaranteeContent.classList.add("maintenance-hide");
    maintenanceCreditContent.classList.remove("maintenance-hide");
    maintenanceCreditContent.classList.add("maintenance-show");
  })
};
/*
    Модальные окна на главной
*/
if (document.querySelector(".user-popup-container")) {
  let popupMap = document.querySelector(".map-popup-wrapper")
  let popupUser = document.querySelector(".user-popup-container")
  let showUserButton = document.querySelector(".popup-button-show")
  let showMapButton = document.querySelector(".map-popup-button")
  let closePopupMap = mapPopupWrapper.querySelector(".close-popup")
  let closePopupUser = userPopupContainer.querySelector(".close-popup")
  // Окно с обращением
  showUserButton.addEventListener("click", function (showPopup) {
    showPopup.preventDefault();
    popupUser.classList.remove("popup-hide");
    popupUser.classList.add("popup-show");
  })
  showMapButton.addEventListener("click", function (showMap) {
    showMap.preventDefault();
    popupMap.classList.remove("popup-hide");
    popupMap.classList.add("popup-show");
  })
  // Кнопка закрытия карты
  closePopupMap.addEventListener("click", function (closePopup) {
    closePopup.preventDefault();
    popupMap.classList.remove("popup-show");
    popupMap.classList.add("popup-hide");
  })
  // Кнопка закрытия обращения (крестик в углу)
  closePopupUser.addEventListener("click", function (closePopup) {
    closePopup.preventDefault();
    popupUser.classList.remove("popup-show");
    popupUser.classList.add("popup-hide");
  })
  // Закрытия обращения клавишей ESC
  window.addEventListener("keydown", function (closePopup) {
    if (closePopup.keyCode === 27) {
      if (popupUser.classList.contains("popup-show")) {
        closePopup.preventDefault();
        popupUser.classList.remove("popup-show");
        popupUser.classList.add("popup-hide")
      }
    }
  });
  window.addEventListener("keydown", function (closePopup) {
    if (closePopup.keyCode === 27) {
      if (popupMap.classList.contains("popup-show")) {
        closePopup.preventDefault();
        popupMap.classList.remove("popup-show");
        popupMap.classList.add("popup-hide")
      }
    }
  });
}
/*
    Модальное окно в каталоге и на главной
    Добавление в корзину
*/
if (document.querySelector(".goods-list")) {
  let goodsPopup = document.querySelectorAll(".btn-green")
  let goodsShow = document.querySelector(".goods-popup-container")
  let goodsClose = goodsPopupContainer.querySelector(".close-popup")
  // Кнопка "Корзина"
  for (var i = 0; i < goodsPopup.length; i++) {
    goodsPopup[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      goodsShow.classList.remove("popup-hide");
      goodsShow.classList.add("popup-show");
    })
  };
  // Закрыть "Добавлено в корзину"
  goodsClose.addEventListener("click", function (closePopup) {
    closePopup.preventDefault();
    goodsShow.classList.remove("popup-show");
    goodsShow.classList.add("popup-hide");
  })
  // Закрыть "Добавлено в корзину" с поомошью ESC
  window.addEventListener("keydown", function (goodsClose) {
    if (goodsClose.keyCode === 27) {
      if (goodsShow.classList.contains("popup-show")) {
        goodsClose.preventDefault();
        goodsShow.classList.remove("popup-show");
        goodsShow.classList.add("popup-hide")
      }
    }
  });
}
/*
    Пагинация в каталоге
*/
if (document.querySelector(".pagination-container")) {
  let pagination = document.querySelectorAll(".pagination-link");
  
  for (var i = 0; i < pagination.length; i++) {
    pagination[i].addEventListener("click", function (evt) {
      evt.preventDefault();
    })
  };
  for (var i = 0; i < pagination.length; i++) {
    pagination[i].addEventListener("click", function (event) {
      removeClass();
      if (event.target.innerHTML === this.innerHTML) {
        this.classList.add("active");
      }
    })
  }
  function removeClass() {
    for (var i = 0; i < pagination.length; i++) {
      pagination[i].classList.remove("active");
    }
  }
  };

if (document.querySelector(".slider")) {
  var slideIndex = 1;
  showSlides(slideIndex);
  function plusSlide() {
      showSlides(slideIndex += 1);
  }
  function minusSlide() {
      showSlides(slideIndex -= 1);  
  }
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }
  function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll(".slider-dot");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" slider-dot-active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " slider-dot-active";
  }
};
/*
    Значок поиска в красный цвет
*/
if (document.querySelector(".site-search")) {  
  let siteSearch = document.querySelector(".site-search")
  let searchIcon = document.querySelector(".search-icon")

  siteSearch.addEventListener("focus", function(search) {
    searchIcon.classList.add("search-icon-red");
  })
  siteSearch.addEventListener("blur", function(search) {
    searchIcon.classList.remove("search-icon-red");
  })
}