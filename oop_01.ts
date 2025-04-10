//Abstract บอกว่ามีคุณสมบัติอะไรบ้าง ไม่มีของ อะไรเลย จะเรียกตรงๆ ผ่าน new ไม่ได้ เพราะเป็น นามธรรม
abstract class Database{
    abstract connect(): void
    abstract disconnect(): void
    abstract executeQuery(): void
}
class Oracle extends Database{  //extends สืบทอดที่เป็น นามธรรม
    connect(): void{
        console.log("Conect Oracle")
    }
    disconnect(): void{
        console.log("Disconnect Oracle")
    }
    executeQuery(): void{
        console.log("Excecute Query")
    }
    // ส่วนที่เพิ่มเติม
    dataDef(): void{
        console.log("Data Definition")
    }
}

const oracle = new Oracle()
oracle.connect()
oracle.executeQuery()
oracle.dataDef()