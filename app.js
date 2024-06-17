window.onload = function() {
    fetch('https://raw.githubusercontent.com/git-wuxianglong/DailyStock/main/stock.txt')
        .then(response => response.text())
        .then(data => {
            const contentElement = document.getElementById('content');

            // 使用空行将数据划分成多个块
            const blocks = data.trim().split('\n\n');

            // 对于每一个块，我们进一步将其分割成日期和信息
            blocks.forEach(block => {
                const lines = block.split('\n');
                const date = lines.shift();

                // 创建一个新的 div 元素来保存日期和信息
                const dayElement = document.createElement('div');
                dayElement.className = 'day';

                const dateElement = document.createElement('div');
                dateElement.className = 'date';
                dateElement.textContent = date;
                dayElement.appendChild(dateElement);

                // 创建一个 ul 元素来保存信息列表
                const ulElement = document.createElement('ul');

                // 将每个信息添加为一个列表项
                lines.forEach(info => {
                    const liElement = document.createElement('li');
                    liElement.textContent = info;
                    ulElement.appendChild(liElement);
                });

                dayElement.appendChild(ulElement);

                // 将这个新的元素添加到内容区域
                contentElement.appendChild(dayElement);
            });
        });
}