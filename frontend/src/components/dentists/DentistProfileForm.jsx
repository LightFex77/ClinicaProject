import Input from "../elements/Input";
import Button from "../elements/Button"
/* eslint-disable react/prop-types */
const DentistProfileForm = ({ formik }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Input
        type="text"
        name="city"
        placeholder="Ciudad"
        value={formik.values.city}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
        error={
          formik.touched.city && formik.errors.city
            ? formik.errors.city
            : undefined
        }
      />
      <Input
        type="text"
        name="address"
        placeholder="Dirección"
        value={formik.values.address}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
        error={
          formik.touched.address && formik.errors.address
            ? formik.errors.address
            : undefined
        }
      />

      <Input
        type="text"
        name="studies"
        placeholder="Estudios"
        value={formik.values.studies}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
        error={
          formik.touched.studies && formik.errors.studies
            ? formik.errors.studies
            : undefined
        }
      />

      <Input
        type="text"
        name="descriptions"
        placeholder="Descripciones"
        value={formik.values.descriptions}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
        error={
          formik.touched.descriptions && formik.errors.descriptions
            ? formik.errors.descriptions
            : undefined
        }
      />

      <Input
        type="text"
        name="specialty"
        placeholder="Especialidad"
        value={formik.values.specialty}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
        error={
          formik.touched.specialty && formik.errors.specialty
            ? formik.errors.specialty
            : undefined
        }
      />

      <Button type="submit" buttonText="Enviar" />
    </form>
  );
};

export default DentistProfileForm;