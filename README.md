# **(☞ ﾟヮﾟ)☞ PRODUCT_ADD☜(ﾟヮﾟ ☜)**

# **༼ つ ◕*◕ ༽つ TEAM*총대장님과 아이들 | 과제**

## **👫 팀원**

- 조용우 외 3명
- 배포주소 : [https://hardcore-shannon-4293b9.netlify.app/](https://hardcore-shannon-4293b9.netlify.app/)
- Front-end: React(Funiction-Component)_reactr-router-dom(V6), CSS Module, JavaScript(ES6)
- 협업툴: Slack, Notion, Github

## **✔과제 구현 목록**

- 노출 및 판매기간 설정
    - 상품 노출 기한
    - 판매 기한 설정
- 상품 기본 정보
    - 카테고리 지정
    - 필터 태크 지정
    - 상품명 및 상품코드
    - 상품 구성 소개 정보
    - 상품 썸네일
    - 상품 대표이미지
    - 상품 총 재고 영역
- 상품 옵션
    - 상품 옵션 세트 등록
    - 상품 옵션 등록
    - 추가 옵션 상품 등록
    - 할인율 계산
- 상품 소개 이미지
- 구매자 추천 이미지
- 상품 정보 고시 알림 설정
- 상품 배송 설정
    - 사용자 배송일 출발일 지정
    - 방문 수령 지정
    - 선 주문 예약 배송 지정
- 마일리지 적립 허용 영역
- 감사 카드 제공 여부 설정
- 저장하기 버튼
- 네비게이션바

## **📆개발 기간**

- 기간: 2022년 1월 27일 ~ 2022년 1월 29일 (3일간)

## **🕹설치 및 시작하는 법**

1. git clone
2. npm install
3. npm run start

## **📃프로젝트 구조**
```
├─public
│   ├─index.html
src
│  config.js
│  index.js
│  Router.js
│
├─components
│  ├─common
│  │      TextInput.style.js
│  │
│  ├─SideNav
│  │      SideNav.js
│  │
│  └─TopNav
│          TopNav.js
│
├─data
│      addProductInfoList.json
│      tagListData.json
│
├─pages
│  └─AddProductInfo
│      │  AddProductInfoForm.js
│      │  AddProductInfoPage.js
│      │  AddProductInfoTemplate.js
│      │  BindingContentContainer.js
│      │  ContentForm.js
│      │  SetProductImage.js
│      │
│      ├─SetDefaultContainerInfo
│      │      SetDefaultContainerInfo.js
│      │
│      ├─SetDefaultProductInfo
│      │      SetCategory.js
│      │      SetDefaultProductInfo.js
│      │      SetFilterTag.js
│      │      SetProductCodeName.js
│      │      SetProductFrontImage.js
│      │      SetProductIntroduce.js
│      │      SetProductStore.js
│      │      SetProductThumbnail.js
│      │
│      ├─SetDelivery
│      │      SetDelivery.js
│      │      SetPickDeliveryDate.js
│      │      SetPickup.js
│      │      SetPreDeliveryDate.js
│      │
│      ├─SetExposureAndPeriod
│      │      SetExposure.js
│      │      SetExposureAndPeriod.js
│      │      SetPeriod.js
│      │
│      ├─SetProductBenefit
│      │      SetProductBenefit.js
│      │      SetProductBenefitContainer.js
│      │
│      ├─SetProductEtc
│      │      SetProductEtc.js
│      │      SetProductEtcContainer.js
│      │
│      ├─SetProductFrontInfo
│      │      SetProductFrontInfo.js
│      │      SetProductFrontInfoBox.js
│      │      SetProductFrontInfoInner.js
│      │
│      └─SetProductOption
│              AdditonOptionProduct.js
│              deleteBtnStyle.js
│              Option.js
│              OptionSet.js
│              SetProductOption.js
│
├─styles
│      GlobalStyle.js
│      theme.js
│
└─utils
│  getTarget.js
│  ToggleButton.js
│  UploadImageFile.js
│
└─Hooks
```

## **🔎구현 기능 및 개인 역할**

> 
> - 노출 기한 설정
>    - radio 타입 input을 이용하여 체크 박스를 만든 후 체크 시 console창에 ‘상품 노출 기한 : 제한 없음’, ‘상품 노출 기한 : 미노출’, ‘상품 노출 기한 : 노출 기간 설정’이라는 문구가 나타나게 하여 저장하기를 눌렀을 때 값을 저장할 준비를 했습니다. 
>   - MUI 라이브러리를 이용하여 달력을 구성하였으며 날짜 설정 시 console창에 시작과 마지막 날짜가 나타나게 하였습니다.
>   - MUI 를 이용하여 년/월/일/시/분 설정을 했습니다.   
> - 판매 기한 설정
>   - radio 타입 input을 이용하여 체크 박스를 만든 후 체크 시 console창에 ‘상품 판매 기한 : 제한 없음’, ‘상품 판매 기한 : 미판매’, ‘상품 판매 기한 : 노출 기간 설정’이라는 문구가 나타나게 하여 저장하기를 눌렀을 때 값을 저장할 준비를 했습니다.       
>   - MUI 라이브러리를 이용하여 달력을 구성하였으며 날짜 설정 시 console창에 시작과 마지막 날짜가 나타나게 하였습니다.  
> - 상품 배송 설정(사용자 배송일, 방문 수령, 선 주문)
>   - checked 타입 input 박스와 CSS를 이용하여 토글 버튼을 만든 후 입력 상황에 따라 console로 상태를 나타나도록 설정해뒀습니다.  
>   - MUI 라이브러리를 이용하여 달력을 구성하였으며 날짜 설정 시 console창에 시작과 마지막 날짜가 나타나게 하였습니다.
> - 네비게이션바
>   - 위와 옆 네비게이션바를 position:fixed로 고정 후 간단한 스타일 작업을 했습니다.
>     

## **📕레퍼런스**

- 이 프로젝트는 [원티드 프론트엔드 프리온보딩](https://www.wanted.co.kr/events/pre_onboarding_course_6)으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
