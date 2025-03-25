import React from "react";

const provinces = {
	[1]: {
		name: "آذربایجان شرقی",
		cities: ["آذرشهر", "اسکو", "اهر", "بستان‌آباد", "بناب", "تبریز", "جلفا", "چاراویماق", "سراب", "شبستر", "مراغه"],
	},
	[2]: {
		name: "آذربایجان غربی",
		cities: ["ارومیه", "اشنویه", "بوکان", "پیرانشهر", "تکاب", "چالدران", "خوی", "سردشت", "سلماس", "شاهین‌دژ", "ماکو", "مهاباد", "میاندوآب", "نقده"],
	},
	[3]: {
		name: "اردبیل",
		cities: ["اردبیل", "بیله‌سوار", "پارس‌آباد", "خلخال", "کوثر", "گِرمی", "مِشگین‌شهر", "نَمین", "نیر"],
	},
	[4]: {
		name: "اصفهان",
		cities: ["آران و بیدگل", "اردستان", "اصفهان", "برخوار و میمه", "تیران و کرون", "چادگان", "خمینی‌شهر", "خوانسار", "سمیرم", "شهرضا", "سمیرم سفلی", "فریدن", "فریدون‌شهر", "فلاورجان", "کاشان", "گلپایگان", "لنجان", "مبارکه", "نائین", "نجف‌آباد", "نطنز"],
	},
	[5]: {
		name: "ایلام",
		cities: ["آبدانان", "ایلام", "ایوان", "دره‌شهر", "دهلران", "شیروان و چرداول", "مهران"],
	},
	[6]: {
		name: "بوشهر",
		cities: ["بوشهر", "تنگستان", "جم", "دشتستان", "دشتی", "دیر", "دیلم", "کنگان", "گناوه"],
	},
	[7]: {
		name: "تهران",
		cities: ["اسلام‌شهر", "پاکدشت", "تهران", "دماوند", "رباط‌کریم", "ری", "ساوجبلاغ", "شمیرانات", "شهریار", "فیروزکوه", "ورامین"],
	},
	[8]: {
		name: "چهارمحال و بختیاری",
		cities: ["اردل", "بروجن", "شهرکرد", "فارسان", "کوهرنگ", "لردگان"],
	},
	[9]: {
		name: "خراسان جنوبی",
		cities: ["بیرجند", "درمیان", "سرایان", "سربیشه", "فردوس", "قائنات", "نهبندان"],
	},
	[10]: {
		name: "خراسان رضوی",
		cities: ["بردسکن", "تایباد", "تربت جام", "تربت حیدریه", "چناران", "خلیل‌آباد", "خواف", "درگز", "رشتخوار", "سبزوار", "سرخس", "فریمان", "قوچان", "کاشمر", "کلات", "گناباد", "مشهد", "مه ولات", "نیشابور"],
	},
	[11]: {
		name: "خراسان شمالی",
		cities: ["اسفراین", "بجنورد", "جاجرم", "شیروان", "فاروج", "مانه و سملقان"],
	},
	[12]: {
		name: "خوزستان",
		cities: ["آبادان", "امیدیه", "اندیمشک", "اهواز", "ایذه", "باغ‌ملک", "بندر ماهشهر", "بهبهان", "خرمشهر", "دزفول", "دشت آزادگان", "رامشیر", "رامهرمز", "شادگان", "شوش", "شوشتر", "گتوند", "لالی", "مسجد سلیمان", "هندیجان"],
	},
	[13]: {
		name: "زنجان",
		cities: ["ابهر", "ایجرود", "خدابنده", "خرمدره", "زنجان", "طارم", "ماه‌نشان"],
	},
	[14]: {
		name: "سمنان",
		cities: ["دامغان", "سمنان", "شاهرود", "گرمسار", "مهدی‌شهر"],
	},
	[15]: {
		name: "سیستان و بلوچستان",
		cities: ["ایرانشهر", "چابهار", "خاش", "دلگان", "زابل", "زاهدان", "زهک", "سراوان", "سرباز", "کنارک", "نیک‌شهر"],
	},
	[16]: {
		name: "فارس",
		cities: ["آباده", "ارسنجان", "استهبان", "اقلید", "بوانات", "پاسارگاد", "جهرم", "خرم‌بید", "خنج", "داراب", "زرین‌دشت", "سپیدان", "شیراز", "فراشبند", "فسا", "فیروزآباد", "قیر و کارزین", "کازرون", "لارستان", "لامِرد", "مرودشت", "ممسنی", "مهر", "نی‌ریز"],
	},
	[17]: {
		name: "قزوین",
		cities: ["آبیک", "البرز", "بوئین‌زهرا", "تاکستان", "قزوین"],
	},
	[18]: {
		name: "قم",
		cities: ["قم"],
	},
	[19]: {
		name: "کردستان",
		cities: ["بانه", "بیجار", "دیواندره", "سروآباد", "سقز", "سنندج", "قروه", "کامیاران", "مریوان"],
	},
	[20]: {
		name: "کرمان",
		cities: ["بافت", "بردسیر", "بم", "جیرفت", "راور", "رفسنجان", "رودبار جنوب", "زرند", "سیرجان", "شهر بابک", "عنبرآباد", "قلعه گنج", "کرمان", "کوهبنان", "کهنوج", "منوجان"],
	},
	[21]: {
		name: "کرمانشاه",
		cities: ["اسلام‌آباد غرب", "پاوه", "ثلاث باباجانی", "جوانرود", "دالاهو", "روانسر", "سرپل ذهاب", "سنقر", "صحنه", "قصر شیرین", "کرمانشاه", "کنگاور", "گیلان غرب", "هرسین"],
	},
	[22]: {
		name: "کهگیلویه و بویراحمد",
		cities: ["بویراحمد", "بهمئی", "دنا", "کهگیلویه", "گچساران"],
	},
	[23]: {
		name: "گلستان",
		cities: ["آزادشهر", "آق‌قلا", "بندر گز", "ترکمن", "رامیان", "علی‌آباد", "کردکوی", "کلاله", "گرگان", "گنبد کاووس", "مراوه‌تپه", "مینودشت"],
	},
	[24]: {
		name: "گیلان",
		cities: ["آستارا", "آستانه اشرفیه", "اَملَش", "بندر انزلی", "رشت", "رضوانشهر", "رودبار", "رودسر", "سیاهکل", "شَفت", "صومعه‌سرا", "طوالش", "فومَن", "لاهیجان", "لنگرود", "ماسال"],
	},
	[25]: {
		name: "لرستان",
		cities: ["ازنا", "الیگودرز", "بروجرد", "پل‌دختر", "خرم‌آباد", "دورود", "دلفان", "سلسله ,کوهدشت"],
	},
	[26]: {
		name: "مازندران",
		cities: ["آمل", "بابل", "بابلسر", "بهشهر", "تنکابن", "جویبار", "چالوس", "رامسر", "ساری", "سوادکوه", "قائم‌شهر", "گلوگاه", "محمودآباد", "نکا", "نور", "نوشهر"],
	},
	[27]: {
		name: "مرکزی",
		cities: ["آشتیان", "اراک", "تفرش", "خمین", "دلیجان", "زرندیه", "ساوه", "شازند", "کمیجان", "محلات"],
	},
	[28]: {
		name: "هرمزگان",
		cities: ["ابوموسی", "بستک", "بندر عباس", "بندر لنگه", "جاسک", "حاجی‌آباد", "شهرستان خمیر", "رودان", "قشم", "گاوبندی", "میناب"],
	},
	[29]: {
		name: "همدان",
		cities: ["اسدآباد", "بهار", "تویسرکان", "رزن", "کبودرآهنگ", "ملایر", "نهاوند", "همدان"],
	},
	[30]: {
		name: "یزد",
		cities: ["ابرکوه", "اردکان", "بافق", "تفت", "خاتم", "صدوق", "طبس", "مهریز", "مِیبُد", "یزد"],
	},
	[31]: {
		name: "البرز",
		cities: ["کرج", "نظرآباد", "فردیس", "اشتهارد", "هشتگرد", "طالقان"],
	},
};

export default class IranCitiesProvincesSelect extends React.Component {
	constructor(props) {
		super(props);
		this.handleChangeProvince = this.handleChangeProvince.bind(this);
		this.handleChangeCity = this.handleChangeCity.bind(this);
		this.citySelectLoader = this.citySelectLoader.bind(this);
		this.state = { selectedProvince: "", selectedCity: "" };
	}

	componentWillMount() {
		if (typeof this.props.defaultProvince != "undefined" && this.props.defaultProvince != "0" && this.props.defaultProvince != "" && this.props.defaultProvince.length < 3) {
			this.setState({ selectedProvince: this.props.defaultProvince });

			if (typeof this.props.defaultCity != "undefined" && this.props.defaultCity != "0" && this.props.defaultCity != "" && this.props.defaultCity.length < 3) {
				this.setState({ selectedCity: this.props.defaultCity });
			}
		}
	}
	citySelectLoader() {
		if (this.state.selectedProvince == "" || this.state.selectedProvince == "0") {
			return;
		}

		const cities = provinces[+this.state.selectedProvince].cities;

		return (
			<div className="city-select-container">
				<label>انتخاب شهر:‌</label>
				<select id="city" value={this.state.selectedCity} onChange={this.handleChangeCity} className="city-form-select" required>
					<option value="">انتخاب کنید</option>
					{cities.map((city, index) => (
						<option key={index + 1} value={index + 1}>
							{city}
						</option>
					))}
				</select>
			</div>
		);
	}

	handleChangeProvince(event) {
		this.setState({ selectedProvince: event.target.value, selectedCity: "" });
	}

	handleChangeCity(event) {
		this.setState({ selectedCity: event.target.value });
	}
	render() {
		return (
			<div className="Provinces-cities-component-container">
				<div className="city-select-container">
					<label>انتخاب استان:</label>
					<select name="province" value={this.state.selectedProvince} className="province-form-select" onChange={this.handleChangeProvince} required>
						{provinces.map((province, index) => (
							<option key={index} value={index}>
								{province.name}
							</option>
						))}
					</select>
				</div>
				{this.citySelectLoader()}
			</div>
		);
	}
}

