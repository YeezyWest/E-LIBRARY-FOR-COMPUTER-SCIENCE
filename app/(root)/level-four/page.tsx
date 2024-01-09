"use client";
import { Button } from "@app/components/ui/button";
import { useState, useEffect } from "react";
import {
  ref,
  uploadBytes,
  listAll,
  getDownloadURL,
  getMetadata,
} from "firebase/storage";
import { storage } from "@app/app/firebase/firebase-config";
import { v4 } from "uuid";
import Card from "@app/components/card";

export default function Page() {
  const [fileUpload, setFileUpload] = useState<File | null>(null);
  const [fileList, setFileList] = useState<
    {
      name: string;
      created: Date;
      size: number;
      url: string;
    }[]
  >([]);

  const fileListRef = ref(storage, "levelFour/");

  const uploadFile = () => {
    if (fileUpload == null) return;
    const fileName = fileUpload.name;
    const fileRef = ref(storage, `levelFour/${fileName + v4()}`);
    const fileInfo = {
      name: fileUpload.name,
      created: new Date(),
      size: fileUpload.size,
    };
    uploadBytes(fileRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, { ...fileInfo, url }]);
      });
      alert("uploaded");
      console.log(fileInfo);
    });
  };

  useEffect(() => {
    listAll(fileListRef)
      .then((response) => {
        // Fetch metadata for each item
        const promises = response.items.map((item) =>
          getMetadata(item).then((metadata) => ({
            name: metadata.name || "",
            created: new Date(metadata.timeCreated || 0),
            size: metadata.size || 0,
            url: item.fullPath, // Use fullPath as a workaround if downloadURL is not available
          }))
        );

        return Promise.all(promises);
      })
      .then((filesData) => {
        setFileList(filesData);
      })
      .catch((error) => {
        console.error("Error fetching metadata:", error);
      });
  }, []);

  // Function to truncate a string
  const truncateString = (str: string, max: number): string => {
    return str.length > max ? str.slice(0, max) + "..." : str;
  };

  return (
    <div className="m-10">
      <div className="my-10 space-x-5">
        <input
          type="file"
          className=" px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          onChange={(event) => {
            setFileUpload(event.target.files?.[0] ?? null);
          }}
        />
        <Button onClick={uploadFile}>Upload</Button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {fileList.map((file, index) => (
          <Card key={index}>
            <div>Name: {truncateString(file.name, 10)}</div>
            <div>Created: {file.created.toLocaleString()}</div>
            <div>Size: {file.size} bytes</div>
            <Button
              onClick={() => {
                window.open(file.url, "_blank");
              }}
            >
              Download
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
