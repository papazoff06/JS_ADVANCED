function editElement(ref, match, replacer) {
    let result = ref.replaceAll(match, replacer)
    console.log(result)

}

editElement('asdasd', 'd', 'z');