# FWM Future Mark Industrial Park — Landing Page

เว็บหน้าเดียวสำหรับโกดัง โรงงาน และที่ดินให้เช่า มหาชัย สมุทรสาคร

- เว็บจริง: https://fm-warehouse.vercel.app
- สร้างด้วย Next.js + Tailwind CSS ขึ้นเว็บผ่าน Vercel (push ขึ้น `main` แล้วเว็บอัปเดตเอง)

## แก้ข้อมูลตรงไหน

- ข้อมูลติดต่อ (เบอร์โทร อีเมล LINE ID): `app/content.ts` ส่วน `CONTACT` ด้านบนสุด
- ข้อความภาษาไทย (`th`) และภาษาจีน (`zh`, หน้า `/zh`): `app/content.ts`
- หน้าตาและการจัดวาง: `app/landing.tsx`
- รูปภาพ: `public/images/` (รูปจากเว็บ fm-warehouses.com ของโครงการ)
- สีและขนาดตัวอักษร: `app/globals.css`

## รันในเครื่อง

```bash
npm install
npm run dev
```
