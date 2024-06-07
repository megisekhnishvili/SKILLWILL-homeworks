function mySetTimeout(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
function makeToys(delay) {
    console.log('Making toys...');
    return mySetTimeout(delay).then(() => {
        console.log('Toys made');
        return true;
    });
}

function deliverToys(delay) {
    console.log('Delivering toys...');
    return mySetTimeout(delay).then(() => {
        console.log('Toys delivered');
        return true;
    });
}

function sellToys(delay) {
    console.log('Selling toys...');
    return mySetTimeout(delay).then(() => {
        console.log('Toys sold');
        return true;
    });
}

makeToys(3000)
    .then((result) => {
        if (result) {
            return deliverToys(2000);
        } else {
            throw new Error('Failed to make toys');
        }
    })
    .then((result) => {
        if (result) {
            return sellToys(1000);
        } else {
            throw new Error('Failed to deliver toys');
        }
    })
    .then((result) => {
        if (result) {
            console.log('Toy shop process completed successfully');
        } else {
            throw new Error('Failed to sell toys');
        }
    })
    .catch((error) => {
        console.error(error.message);
    });
    async function makeToysAsync(delay) {
        console.log('Making toys...');
        await mySetTimeout(delay);
        console.log('Toys made');
        return true;
    }
    
    async function deliverToysAsync(delay) {
        console.log('Delivering toys...');
        await mySetTimeout(delay);
        console.log('Toys delivered');
        return true;
    }
    
    async function sellToysAsync(delay) {
        console.log('Selling toys...');
        await mySetTimeout(delay);
        console.log('Toys sold');
        return true;
    }
    
    async function toyShopProcess() {
        try {
            const madeToys = await makeToysAsync(3000);
            if (!madeToys) throw new Error('Failed to make toys');
    
            const deliveredToys = await deliverToysAsync(2000);
            if (!deliveredToys) throw new Error('Failed to deliver toys');
    
            const soldToys = await sellToysAsync(1000);
            if (!soldToys) throw new Error('Failed to sell toys');
    
            console.log('Toy shop process completed successfully');
        } catch (error) {
            console.error(error.message);
        }
    }
    
    toyShopProcess();
    