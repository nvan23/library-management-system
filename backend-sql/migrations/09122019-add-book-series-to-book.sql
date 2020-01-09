-- Table: public."bookSeries"

-- DROP TABLE public."bookSeries";

CREATE TABLE public."bookSeries"
(
    id uuid NOT NULL,
    series character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "deletedAt" timestamp with time zone,
    "bookId" uuid,
    "createdById" uuid,
    "updatedById" uuid,
    CONSTRAINT "bookSeries_pkey" PRIMARY KEY (id),
    CONSTRAINT "bookSeries_bookId_fkey" FOREIGN KEY ("bookId")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID,
    CONSTRAINT "bookSeries_createdById_fkey" FOREIGN KEY ("createdById")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID,
    CONSTRAINT "bookSeries_updatedById_fkey" FOREIGN KEY ("updatedById")
        REFERENCES public.books (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE SET NULL
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE public."bookSeries"
    OWNER to postgres;