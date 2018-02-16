update shelf 
set binname = $1,
price = $2,
toggle = $3
where binid = $4