let role = "admin"
let isBanned = false
let hasPermission = true

const canAccess = (role === "admin" || role === "user") && !isBanned && hasPermission

if (role === "admin") {
    canAccess = true
}else if (isBanned) {
    canAccess = false
}else if (hasPermission) {
    canAccess = true
}

if (canAccess) {
    console.log("Access granted")
} else {
    console.log("Access denied")
}
