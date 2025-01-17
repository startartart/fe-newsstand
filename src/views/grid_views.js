import { COL_SIZE, ROW_SIZE, ASSETS_IMAGE_PATH } from "../constants.js";
import { view_option } from "../globals.js";

function renderGridView(data, page, action) {
    const grid_press_container = document.querySelector(".main_news_container");
    grid_press_container.innerHTML = "";

    createPressList(grid_press_container, data, page * 24);

    action[0]("grid", page);
    action[1]();
}

function createPressList(container, data, idx) {
    for (let i = 0; i < COL_SIZE; i++) {
        let ul = document.createElement("ul");
        for (let j = 0; j < ROW_SIZE; j++) {
            const item = data[idx] || { name: "empty", url: "" };
            ul.innerHTML += `
            <li class="press_data_item">
                <img class="press_item press_data_img press_front" src="${ASSETS_IMAGE_PATH}${view_option.mode}${item.url}" />
                <button class="press_item content_subscribe press_back" name="${item.name}" is_subscribe="true">
                    <img src="./assets/icons/plus.png" />
                    <span>구독하기</span>
                </button>
            </li>
            `;
            idx += 1;
        }
        container.appendChild(ul);
    }
}

function renderSubscribe(press, is_subscribe) {
    if (is_subscribe) {
        press.is_subscribe = false;
        console.log(`${press.name}이 구독해지되었습니다.`);
        press.innerHTML = `
        <img src="./assets/icons/plus.png" />
        <span>구독하기</span>
        `;
    } else {
        press.is_subscribe = true;
        console.log(`${press.name}이 구독되었습니다.`);
        press.innerHTML = `
        <img src="./assets/icons/symbol.png" />
        `;
    }
}

export { renderGridView, renderSubscribe };
