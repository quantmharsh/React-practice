import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
const RTE = ({ name, control, label, defaultValue = "" }) => {
	return (
		<div className="w-full ">
			{label && <label className="inline-block mb-1 pl-1">{label}</label>}
			<Controller
				name={name || "content"}
				//  passing control to parent component
				control={control}
                //render is used to render what we want to render it can be input field or any other thing
                //here we are rendering our editor
				render={({ field: { onChange } }) => (
					<Editor
						initialValue={defaultValue}
						init={{
							branding: false,
							height: 500,
							menubar: true,
							plugins: [
								"image",
								"advlist",
								"autolink",
								"lists",
								"link",
								"image",
								"charmap",
								"preview",
								"anchor",
								"searchreplace",
								"visualblocks",
								"code",
								"fullscreen",
								"insertdatetime",
								"media",
								"table",
								"code",
								"help",
								"wordcount",
								"anchor",
							],
							toolbar:
								"undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
							content_style:
								"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
						}}
                        onEditorChange={onChange}
					/>
				)}
			/>
		</div>
	);
};

export default RTE;
