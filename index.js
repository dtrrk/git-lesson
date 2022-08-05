//
// function googleTranslateElementInit() {
//     new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,ru,be,it', autoDisplay: false}, 'google_translate_element');
// }
//
// function TranslateClearCookie(lang) {
//     document.cookie = `googtrans=/en/${lang};path=/`;
//     // document.cookie = `googtrans=/en/it;path=/git-lesson`;
// }
//
// document.addEventListener("DOMContentLoaded", () => {
//
//     let lang = 'en';
//     if (document.cookie) {
//         const cookies = document.cookie.split(';')
//         console.log(cookies)
//         for (const cookie of cookies) {
//             let arr = cookie.split('=')
//             if (arr[0] === 'googtrans') {
//                 lang = arr[1].slice(4)
//             }
//         }
//     } else {
//         return false
//     }
//
//     const googleOptions = document.getElementById('custom-select').querySelectorAll('option')
//     for (let i = 0; i < googleOptions.length; i++) {
//         if (googleOptions[i].value === lang) {
//             googleOptions[i].selected = true;
//         }
//     }
// });
//
//
// function translateLanguage(lang) {
//     googleTranslateElementInit()
//     TranslateClearCookie(lang)
//     document.location.reload()
// }


function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,ru,be,it', autoDisplay: false}, 'google_translate_element');
}

function translateLanguage(lang) {
    googleTranslateElementInit()

    const $frame = document.querySelector('.goog-te-menu-frame');

    const $googleOptions = document.getElementById('google_translate_element').querySelectorAll('select option')
    let fullName = ''
    Array.from($googleOptions).find(option => {
        if (option.value == lang) {
            option.click()
            option.selected = true;
            fullName = option.textContent
        }
    })

    if (!$frame) {
        document.cookie = `googtrans=/en/${lang};path=/`;
        document.location.reload()
    }

    const googleOptions = $frame.contentWindow.document.body.querySelectorAll('.goog-te-menu2 span.text')
    for (const option of googleOptions) {
        if (option.textContent === fullName) {
            option.click()
            option.selected = true;
        }
    }

    if (lang == 'en') {
        document.location.reload()
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let lang = 'en';
    if (document.cookie) {
        const cookies = document.cookie.split(';')
        for (const cookie of cookies) {
            let arr = cookie.split('=')
            if (arr[0] === 'googtrans') {
                lang = arr[1].slice(4)
            }
        }
    } else {
        return false
    }

    const googleOptions = document.getElementById('custom-select').querySelectorAll('option')
    for (let i = 0; i < googleOptions.length; i++) {
        if (googleOptions[i].value === lang) {
            googleOptions[i].selected = true;
        }
    }
});
