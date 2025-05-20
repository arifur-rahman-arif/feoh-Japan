const setFloorPlanHeight = () => {
	const floorMapLeftItems = document.querySelectorAll('.floor-map-plan .floor-column.floor-left .floor');
    const floorMapRightItems = document.querySelectorAll('.floor-map-plan .floor-column.floor-right .floor');

    floorMapLeftItems.forEach((leftItem, index) => {
        const rightItem = floorMapRightItems[index];

        // Reset heights first
        leftItem.style.height = 'auto';
        rightItem.style.height = 'auto';

        const leftHeight = leftItem.offsetHeight;
        const rightHeight = rightItem.offsetHeight;

        const maxHeight = Math.max(leftHeight, rightHeight);
        leftItem.style.height = `${maxHeight}px`;
        rightItem.style.height = `${maxHeight}px`;
    });
}

window.addEventListener('load', () => {
	if (window.innerWidth > 768) {
        setFloorPlanHeight();
    }
});
