const dateFormat = (date) => {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  }

  return new Date(date).toLocaleString('en-ID', options)
}

export default dateFormat